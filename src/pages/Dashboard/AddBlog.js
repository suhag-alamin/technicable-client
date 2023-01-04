import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import addBlogData from "../../redux/thunk/addBlogData";

const AddBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.likes = 0;
    data.createdDate = new Date().toISOString();
    data.uploadPosition = blogs.length;
    data.tags = data.tags.split("\n");
    // add data to database
    dispatch(addBlogData(data));
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap flex-col gap-3 w-1/2 mx-auto max-w-3xl justify-between bg-white "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-technicableSecondary text-xl text-center mb-4">
          Add new blog
        </h3>
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="url"
          placeholder="Image Link"
          {...register("img", { required: true })}
        />
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="text"
          placeholder="Author Name"
          {...register("author", { required: true })}
        />
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="text"
          placeholder="Category Name"
          {...register("category", { required: true })}
        />
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="text"
          placeholder="Time to Read (1 min)"
          {...register("timeToRead")}
        />
        <input
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          type="url"
          placeholder="Credit Link"
          {...register("creditLink")}
        />
        <textarea
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          placeholder="Tags (separate by press enter))"
          rows="4"
          {...register("tags", { required: true })}
        ></textarea>
        <textarea
          className="p-2 border border-technicablePrimary rounded outline-technicablePrimary text-base text-technicableSecondary"
          placeholder="Description"
          rows="4"
          {...register}
        ></textarea>

        <button
          className="w-full px-2 py-2 bottom-0 bg-technicablePrimary text-technicableWhite font-medium rounded-md hover:bg-technicableTeriary transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
