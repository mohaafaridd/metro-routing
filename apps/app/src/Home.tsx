import Select from "react-select";

export const Home = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="rounded-none text-3xl font-bold underline">Hello World</p>

      <Select options={options} />
    </div>
  );
};
