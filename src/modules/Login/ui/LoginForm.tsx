import { useLogin } from "../api/queries";
import { useFormLogin } from "../model/hooks/use-form-login";
import { LoginFormField } from "./LoginFormField";
import { LoginFormWrapper } from "./LoginFormWrapper";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useFormLogin();
  const { mutate, isPending } = useLogin();

  return (
    <LoginFormWrapper>
      <form
        className="shrink-0"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <LoginFormField
          register={register}
          label="Username"
          name="username"
          placeholder="Username"
          error={errors.username?.message}
        />
        <LoginFormField
          register={register}
          label="Password"
          name="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full h-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg transition-colors duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </LoginFormWrapper>
  );
};
