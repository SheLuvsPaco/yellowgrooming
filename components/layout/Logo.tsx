import Image from "next/image";

export default function Logo() {
  return (
    <div className="fixed -top-6 left-4 z-50">
      <Image
        src="/images/logopolina.png"
        alt="Polina Tsvetkova Grooming Studio"
        width={300}
        height={75}
        className="h-36 w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
        priority
      />
    </div>
  );
}
