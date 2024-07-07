import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "typescript-cookie";
import { useForm } from "react-hook-form";
import { signInUser } from "../api/signInUser";
import { PasswordField } from "../components/Auth/PasswordField";

export const Login = () => {
  const {
    handleSubmit,
    register,
    setError,

    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(values: any) {
    try {
      console.log("getting into submit with values", values);
      const res = await signInUser(values.id, values.password);
      if (res.data.token) setCookie("token", res.data.token, { expires: 1 });
      navigate("/search");
    } catch (e: any) {
      const errorMessage = e.response.data.error;
      setError("error", { type: "custom", message: errorMessage });
    }
  }

  return (
    <Container py={{ base: "12", md: "24" }}>
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          //   boxShadow={{ base: "none", sm: "md" }}
          border={{ base: "none", sm: "1px solid" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <FormLabel htmlFor="ID">ID card</FormLabel>
                  <Input
                    id="Id"
                    type="number"
                    placeholder="Id"
                    {...register("id", {
                      required: "This is required",
                      maxLength: { value: 9, message: "Max length is 9" },
                    })}
                  />
                  <PasswordField register={register} />
                </FormControl>
                <Button
                  mt={4}
                  w={"full"}
                  colorScheme="green"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Sign in
                </Button>
                <Button
                  mt={4}
                  w={"full"}
                  colorScheme="green"
                  isLoading={isSubmitting}
                  onClick={() => navigate("/signup")}
                >
                  Create a user
                </Button>
              </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
