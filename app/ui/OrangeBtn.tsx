function OrangeBtn({
  text,
  className,
}: Readonly<{ text: string; className?: string }>) {
  return (
    <div
      className={`bg-orange-primary py-2 px-7 rounded-full w-fit ${className}`}
    >
      {text}
    </div>
  );
}

export default OrangeBtn;
