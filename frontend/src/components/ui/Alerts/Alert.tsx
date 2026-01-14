import Error from "./Error";
import Success from "./Success";
import Warning from "./Warning";

interface Props {
  message: string;
  type: "error" | "success" | "warning";
}

function Alert({ message, type }: Props) {
  switch (type) {
    case "error":
      return <Error message={message} />;

    case "warning":
      return <Warning message={message} />;

    case "success":
      return <Success message={message} />;

    default:
      return <Success message={message} />;
  }
}

export default Alert;
