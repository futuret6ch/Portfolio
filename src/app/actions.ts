"use server";

export interface ConsultationData {
  fullName: string;
  email: string;
  mobileNumber: string;
  companyName?: string;
  projectType: string;
  consultationDate: string;
  budget: string;
  description: string;
}

export async function submitConsultation(formData: ConsultationData) {
  const {
    fullName,
    email,
    mobileNumber,
    companyName = "N/A",
    projectType,
    consultationDate,
    budget,
    description,
  } = formData;

  const emailBody = `Name:
${fullName}

Email:
${email}

Mobile:
${mobileNumber}

Company:
${companyName}

Project Type:
${projectType}

Preferred Date:
${consultationDate}

Budget:
${budget}

Project Description:
${description}

Submitted From:
Gorli Janardhan Naidu Portfolio Website`;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("=== [DEVELOPMENT/MOCK EMAIL SENDER] ===");
    console.log("Subject: New Consultation Request");
    console.log("To: jana.teja2003@gmail.com");
    console.log(emailBody);
    console.log("=========================================");
    return { success: true, mock: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "jana.teja2003@gmail.com",
        subject: "New Consultation Request",
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return { success: false, error: "Failed to send email via provider." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
