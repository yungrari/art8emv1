// "use client";

// import { useState } from "react";

export default function Contact() {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const email = formData.get("email") as string;

  //   setEmail(email);
  // };

  return (
    <main className="pt-8 px-4">
      <section className="flex flex-col mb-20 text-[16vw] leading-[0.9] tracking-tight">
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
        <a href="http://telegram.org" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </section>

      <section className="flex flex-col text-[1.75rem] leading-[1] tracking-tight">
        <a href="tel:+48519503988">(+48) 519 503 988</a>
        <a href="mailto:artcreatorartem@gmail.com">artcreatorartem@gmail.com</a>
      </section>
      {/* {!email ? (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[3.75rem] font-[450] leading-[1] tracking-tighter">
            Contact
          </h1>
          <p>HI,</p>
          <input
            className="w-full uppercase placeholder:opacity-50 dark:bg-background"
            type="email"
            name="email"
            id="email"
            placeholder="ENTER YOUR EMAIL"
          />
          <textarea
            className="w-full uppercase placeholder:opacity-50 dark:bg-background"
            name="message"
            id="message"
            placeholder="ENTER YOUR MESSAGE"
            rows={1}
          />
          <button className="text-left" type="submit">
            OK
          </button>
        </form>
      ) : (
        <p className="text-[1.75rem] leading-[1] tracking-tighter font-medium">
          Thanks {email.split("@")[0]}, we will be contacting you shortly.
        </p>
      )} */}
    </main>
  );
}
