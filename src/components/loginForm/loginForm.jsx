// "use client";

// import { login } from "@/app/lib/action";
// import styles from "./loginForm.module.css";
// import { useFormState } from "react-dom";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const LoginForm = () => {
//   const [state, formAction] = useFormState(login, undefined);

//   const router = useRouter();

//   useEffect(() => {
//     state?.success && router.push("/home");
//   }, [state?.success, router]);

//   return (
//     <form className={styles.form} action={formAction}>
//       <input type="text" placeholder="username" name="username" />
//       <input type="password" placeholder="password" name="password" />
//       <button>Login</button>
//       {state?.error}
//       <Link href="/register">
//         {"Don't have an account?"} <b>Register</b>
//       </Link>
//     </form>
//   );
// };

// export default LoginForm;