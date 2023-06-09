import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  const tabs = ["Home", "Projects"];
  return (
    <div className="sticky top-0 z-[1] flex w-full justify-between bg-black p-4">
      <p className="font-bold">Thomas.Dev</p>
      <div className="flex space-x-1">
        {tabs?.map((s, i) => (
          <PrimaryButton key={i}>{s}</PrimaryButton>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
