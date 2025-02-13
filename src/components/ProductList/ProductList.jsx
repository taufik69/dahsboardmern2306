import React, { useState } from "react";
import {
  Textarea,
  Input,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ProductList = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");

  const TABLE_HEAD = [
    "Name",
    "Description",
    "price",
    "image",
    "Category",
    "SubCategory",
    "Actions",
  ];
  const TABLE_ROWS = [
    {
      Name: "Sample Product",
      Description: "This is a sample product description.",
      price: "$25.99",
      image: "https://example.com/sample-image.jpg",
      Category: "Electronics",
      SubCategory: "Gadgets",
      Actions: "View | Edit | Delete",
    },
    {
      Name: "Another Product",
      Description: "Another sample description for a product.",
      price: "$45.00",
      image: "https://example.com/another-image.jpg",
      Category: "Home Appliances",
      SubCategory: "Kitchen",
      Actions: "View | Edit | Delete",
    },
  ];

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      {/* category list */}
      <Card className="h-[575px] mt-10 w-full overflow-y-scroll">
        <table className="w-full  text-center">
          <thead className="sticky top-0 z-10">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                { Name, Description, price, image, Category, SubCategory },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50 text-center";

                return (
                  <tr key={Name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <img src={image} alt="Missing" />
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Category}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {SubCategory}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-x-3 justify-center">
                        <Button color="red">Delete</Button>
                        <Button color="green" onClick={handleOpen}>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>

      {/* dialouge box */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="flex flex-col gap-y-5 p-10">
          <>
            <div className="flex flex-col gap-y-10">
              <Input size="md" label="Product Name" />
              <div className="mb-10">
                <label htmlFor="description" className="mb-3 inline-block">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  className="h-[200px]"
                />
              </div>

              <Input size="md" label="Product price" type="number" />

              <div className="flex items-start justify-between">
                <div className="w-[30%] bg-red-50">
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>

                <div className="w-[65%] flex flex-col gap-y-24 ">
                  <div className=" flex justify-between">
                    <div className="w-[45%] flex flex-col gap-y-10">
                      <Select color="purple" label="Select Category">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>

                      <Input size="md" label="Product Discount" type="number" />
                    </div>

                    <div className="w-[45%] flex flex-col gap-y-10">
                      <Select color="purple" label="Select SubCategory">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>

                      <Input size="md" label="Product Stock" type="number" />
                    </div>
                  </div>
                  <Input size="md" label="Product Reviews" type="number" />
                </div>
              </div>

              <Button
                variant="filled"
                color="green"
                loading={false}
                className="w-[10%]"
              >
                Upload
              </Button>
            </div>
          </>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ProductList;
