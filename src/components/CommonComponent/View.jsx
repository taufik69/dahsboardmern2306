import React, { useEffect, useState } from "react";
import {
  Textarea,
  Input,
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "../../Features/Api/exclusiveApi";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { successToast } from "../../utils/Toast";
const View = () => {
  const params = useParams();
  const [updatecategory, setupadteCategory] = useState({});
  const { id } = params;
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetSingleCategoryQuery(id);
  const [updateCategory, { isLoading: updateLoading, isError: updateError }] =
    useUpdateCategoryMutation();
  useEffect(() => {
    if (data) {
      setupadteCategory(data?.data);
      //   setvalue("name", data?.data?.name);
      //   setvalue("description", data?.data?.description);
    }
  }, [data]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: updatecategory?.name || "",
      description: updatecategory?.description || "",
    },
  });

  useEffect(() => {
    if (updatecategory?.name || updateCategory.description) {
      setValue("name", updatecategory.name);
      setValue("description", updatecategory.description);
    }
  }, [updatecategory, setValue]);

  const updatefunCategory = async (data) => {
    try {
      const response = await updateCategory({
        name: data.name,
        description: data.description,
        id: id,
      });
      if (response?.data?.data) {
        successToast("Category Updated Successfully");
        navigate("/category");
      }
    } catch (error) {
      console.log("Error from update category:", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-y-5 p-10"
        onSubmit={handleSubmit(updatefunCategory)}
      >
        <Input
          size="md"
          label=" Name"
          {...register("name")}
          color="black"
          defaultValue={updatecategory?.name || ""} // Set initial value properly
        />
        {errors.name && (
          <span className="text-red-500">This description is required</span>
        )}
        <Textarea
          color="gray"
          label="Descrioption"
          {...register("description")}
          defaultValue={updatecategory?.description || ""} // Set initial value properly
        />
        {errors.description && (
          <span className="text-red-500">This description is required</span>
        )}
        <Button
          variant="gradient"
          color="green"
          type="submit"
          loading={updateLoading}
        >
          <span>update</span>
        </Button>
      </form>
    </div>
  );
};

export default View;
