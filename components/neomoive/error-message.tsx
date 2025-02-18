

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="mx-auto">
      <p className=" text-destructive text-center">{message}</p>
    </div>
  );
}
