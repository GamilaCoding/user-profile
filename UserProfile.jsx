import { useEffect, useState } from "react";
import TextField from "../../components/UIElements/Form/TextField";
import MainButton from "../../components/UIElements/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { $api, useData } from "../../client";
import PromiseToast from "../../components/UIElements/Toasts/PromiseToast";
import { BounceLoader } from "react-spinners";

export const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const { data, error, mutate: mutateSettings } = useData("wp-json/user/v1/profile");

  const Schema = Yup.object({
    email: Yup.string()
      .email("ادخل بريد الكتروني صحيح")
      .required("لايمكن ترك هذا الحقل فارغاً"),
    password: Yup.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل").nullable(),
    images: Yup.mixed().nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  useEffect(() => {
    if (data) {
      setValue("email", data.email);
      setValue("images", null);
      setLoading(false);
    }

    if (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  }, [data, error, setValue]);

  const onSubmit = (formData) => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("email", formData.email);

    if (formData.password) {
      formDataToSubmit.append("password", formData.password);
    }

    if (formData.images) {
      for (let i = 0; i < formData.images.length; i++) {
        formDataToSubmit.append("images", formData.images[i]);
      }
    }

    const callData = $api.post("wp-json/user/v1/updateProfile", formDataToSubmit);
    PromiseToast(
      callData,
      "جاري تحديث البيانات...",
      "فشلت عملية التحديث، يرجى المحاولة لاحقاً",
      "تم تحديث البيانات بنجاح!",
      () => {
        mutateSettings();
      }
    );
  };

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-center my-4">تعديل الملف الشخصي</h1>

      {loading ? (
        <div className="absolute top-0 bottom-0 w-full bg-blue-dark bg-opacity-60 rounded-md content-center">
          <BounceLoader className="m-auto" />
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* البريد الإلكتروني */}
        <TextField
          label={"البريد الإلكتروني"}
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />

        {/* كلمة المرور */}
        <TextField
          label={"كلمة المرور الجديدة (اختياري)"}
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />

        {/* صورة الملف الشخصي */}
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            صورة الملف الشخصي
          </label>
          <input
            id="images"
            name="images"
            type="file"
            {...register("images")}
            className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md"
          />
          {errors.images && <span className="text-red-500 text-sm">{errors.images.message}</span>}
        </div>

        {/* زر حفظ */}
        <div className="pt-11">
          <MainButton text={"حفظ التغييرات"} />
        </div>
      </form>
    </div>
  );
};
