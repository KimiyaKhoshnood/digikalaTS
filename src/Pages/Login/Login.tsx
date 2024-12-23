import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const onSubmit = async (data) => {
    try {
      await axios.post(`http://localhost:3004/user`, data)
      navigate("/", { replace: true }); // <-- redirect
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  return (<>
    <div className="flex justify-center items-center h-[100vh]">
      <div className="sm:w-[400px] w-full
       sm:border border-gray-200 rounded-md flex flex-col items-center p-8 text-xs gap-3">
        <img
          className="w-[100px] py-2"
          src="https://www.digikala.com/brand/full-vertical.svg"
          alt=""
        />
        <h1 className="font-bold text-lg w-full py-3">ورود | ثبت‌نام</h1>
        <p className="w-full text-gray-700">سلام!</p>
        <p className="w-full text-gray-700">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full py-2 flex flex-col gap-8"
        >
          <label htmlFor="">
            <input
              {...register("PhoneOrEmail", {
                required: "لطفا این قسمت را خالی نگذارید",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "شماره موبایل یا ایمیل نادرست است.",
                },
              })}
              className="border border-rose-700 w-full py-3 rounded-md text-sm focus:outline-none px-3"
              type="text"
            />
            {errors.PhoneOrEmail && (
              <p className="text-rose-700">{errors.PhoneOrEmail.message}</p>
            )}
          </label>
          <button type="submit" className="py-3 text-white rounded-md text-sm w-full bg-rose-500">
            ورود
          </button>
        </form>
        <p className="text-[11px]">
          ورود شما به معنای پذیرش
          <span className="text-sky-600"> شرایط دیجی‌کالا </span>و
          <span className="text-sky-600"> قوانین حریم‌خصوصی </span>
          است
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
