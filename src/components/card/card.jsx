import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

const CustomCard = ({ title, subtitle, description, image, link }) => {
  return (
    <Card className="max-w-[350px] shadow-lg   ">
      <CardHeader className="flex gap-3 p-4">
        {image && (
          <Image
            alt={`${title} logo`}
            height={50}
            radius="full"
            src={image}
            width={50}
          />
        )}
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold ">{title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </CardHeader>

      <Divider />
      <CardBody className="px-4 py-3">
        <p className="text-base ">{description}</p>
      </CardBody>

      <Divider />
      {link && (
        <CardFooter className="p-4">
          <Link
            isExternal
            showAnchorIcon
            href={link}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
          >
            Learn More
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default CustomCard;
