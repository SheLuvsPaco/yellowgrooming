import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, date } = body;

    // Basic validation
    if (!name || !phone || !service || !date) {
      return NextResponse.json(
        { message: "Моля, попълнете всички задължителни полета." },
        { status: 400 }
      );
    }

    // Placeholder: Log to console
    console.log("🐾 Booking received:", {
      name,
      phone,
      service,
      date,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate email service (Resend, SendGrid) or database
    // Example for future email integration:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'info@beautypawn.bg',
    //   subject: `Нова резервация от ${name}`,
    //   html: `<p>Име: ${name}</p><p>Телефон: ${phone}</p><p>Услуга: ${service}</p><p>Дата: ${date}</p>`
    // });

    // For now, just return success message
    return NextResponse.json(
      {
        message: "Успешно запазихте час! Ще се свържем с вас скоро за потвърждение.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { message: "Грешка при запазване на час. Моля, опитайте отново." },
      { status: 500 }
    );
  }
}
