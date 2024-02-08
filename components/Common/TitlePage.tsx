type TitlePageProps = {
  title: string;
  description?: string;
};

const TitlePage = ({ title, description }: TitlePageProps) => {
  return (
    <div className="flex flex-col w-full justify-start items-center mb-2 gap-2">
      <h1 className="text-2xl font-bold w-full">{title}</h1>
      {description && <p className="text-base w-full">{description}</p>}
    </div>
  );
};

export default TitlePage;
