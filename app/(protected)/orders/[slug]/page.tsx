export default function Page({
  params,
  searchParams,
  children,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  children: React.ReactNode;
}) {
  return <div>{params.slug}</div>;
}
