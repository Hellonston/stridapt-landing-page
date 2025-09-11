"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import InstagramIcon from "@/components/icons/instagram-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const mailToLink = `mailto:stridapt@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello, my name is ${firstName} ${lastName} (${email}).

${message}`
    )}`;
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </div>
        <p className="mb-12 text-muted-foreground text-lg max-w-2xl">
          We&apos;d love to hear from you. Whether you have questions about our
          prostheses, need support, or just want to say hi, feel free to reach
          out!
        </p>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Follow Us</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Stay connected with Stridapt on social media
          </p>
          <div className="flex gap-8 flex-wrap justify-center">
            <Link
              href="https://www.instagram.com/stridapt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted/40 hover:bg-muted/60 transition-all duration-200 hover:scale-105 group"
            >
              <InstagramIcon
                size={32}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
              <span className="font-semibold text-lg">@stridapt</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/stridapt/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted/40 hover:bg-muted/60 transition-all duration-200 hover:scale-105 group"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                <LinkedInIcon />
              </div>
              <span className="font-semibold text-lg">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
