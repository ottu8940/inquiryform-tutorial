import MailForm from "@/components/MailForm/MailForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="font-semibold text-2xl mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}

