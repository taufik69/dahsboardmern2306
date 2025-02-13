import {
  Button,
  Input,
  Card,
  Typography,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React, { useState } from "react";
import {
  useGetAllBannerQuery,
  useUploadBannerMutation,
} from "../../Features/Api/exclusiveApi";
import { useForm } from "react-hook-form";
import { successToast } from "../../utils/Toast";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [tempBannerData, setTempBannerData] = useState({});
  const [updatedData, setUpdatedData] = useState({
    name: "",
    image: "",
  });

  // Toggle dialog open state and set data for editing
  const handleOpen = (item) => {
    if (item) setTempBannerData(item);
    setOpen((prev) => !prev);
  };

  const TABLE_HEAD = ["Name", "Image", "Date", "Actions"];

  // Using one form hook instance for both forms.
  // (Consider using separate instances if needed.)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [UploadBanner, { isLoading }] = useUploadBannerMutation();
  const { data: bannerData } = useGetAllBannerQuery();

  // Main form submit handler
  const handleBanner = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("name", data.name);
      const response = await UploadBanner(formData);
      console.log(response.data.data);
      if (response.data.data) {
        successToast("Banner Upload Successfully");
      }
    } catch (error) {
      console.log("Error from upload banner:", error);
    } finally {
      reset();
    }
  };

  // Dialog (update) form submit handler
  const handlUpdateBanner = async (data) => {
    try {
      // You can process updated data here.
      // For example, you might create FormData and update the banner.
      console.log("Update form data:", data);
      // After successful update, you may want to close the dialog:
      setOpen(false);
    } catch (error) {
      console.log("Error from update banner:", error);
    } finally {
      reset();
    }
  };

  console.log(updatedData);

  return (
    <div className="flex flex-col gap-y-5">
      {/* Main Upload Form */}
      <form
        id="mainForm"
        action="#"
        className="flex flex-col gap-y-5"
        onSubmit={handleSubmit(handleBanner)}
      >
        <Input
          size="md"
          label="Banner Title"
          color="black"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && (
          <span className="text-red-500">
            Please fill the title (max 20 characters).
          </span>
        )}

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                     5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setValue("image", e.target.files[0])}
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">Please select an image *</span>
            )}
          </label>
        </div>

        <Button
          variant="outlined"
          loading={isLoading}
          className="w-[10%]"
          type="submit"
          form="mainForm"
        >
          Upload
        </Button>
      </form>

      {/* Banner List */}
      <Card className="h-[460px] w-full overflow-y-scroll">
        <table className="w-full text-center">
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
            {bannerData?.data.map(({ name, image, createdAt, _id }, index) => {
              const isLast = index === bannerData?.data?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50 text-center";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex justify-center">
                      <img
                        src={image}
                        alt={name}
                        className="w-[300px] h-[100px] object-cover rounded-xl"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-x-3 justify-center">
                      <Button color="red">Delete</Button>
                      <Button
                        color="green"
                        onClick={() => handleOpen({ name, image, _id })}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Dialog for updating a banner */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="flex flex-col gap-y-5">
          <form
            id="dialogForm"
            className="flex flex-col gap-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              size="md"
              label="Banner Title"
              color="black"
              defaultValue={tempBannerData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
            />

            {/* Image container with hover overlay */}
            <div className="w-full relative group">
              <img
                src={tempBannerData.image}
                alt="Banner"
                className="w-full h-full object-cover imagebox"
              />
              {/* Use a unique id for the dialog’s file input */}
              <label
                htmlFor="dialog-dropzone-file"
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 mb-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                         5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-white">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-white">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dialog-dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, image: e.target.files[0] })
                  }
                />
              </label>
            </div>

            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => setOpen(false)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handlUpdateBanner}
              >
                <span>Update</span>
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Banner;
