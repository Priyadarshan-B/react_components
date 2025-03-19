import CustomCard from "../../components/card/card";
import CustomButton from "../../components/button/button";
import InputBox from "../../components/textbox/input";

const Dashboard = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-2">Welcome to your dashboard.</p>
        <div className="flex gap-10">
      <CustomCard
        title="HeroUI"
        subtitle="heroui.com"
        description="Make beautiful websites regardless of your design experience."
        image="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        link="https://github.com/heroui-inc/heroui"
      />
    <CustomButton
    type="submit"
    size="md"
    color="primary"
    variant="flat"
    >
        Submit
        </CustomButton>

        <InputBox
        label="Enter Your Name"
        type="text"
        size="md"
        classname="max-w-xs"

        />
     
    </div>
      </div>
    );
  };
  
  export default Dashboard;
  