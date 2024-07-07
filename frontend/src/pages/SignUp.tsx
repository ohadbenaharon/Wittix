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
import { signUpUser } from "../api/signUpUser";
import { PasswordField } from "../components/Auth/PasswordField";

export const Signup = () => {
  const {
    handleSubmit,
    register,
    setError,

    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(values: any) {
    try {
      const res = await signUpUser(
        values.id,
        values.password,
        values.email,
        values.name
      );
      if (res.data.token) setCookie("token", res.data.token, { expires: 1 });
      navigate("/list");
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
          border={{ base: "none", sm: "1px solid" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <FormLabel htmlFor="ID">Identity Number</FormLabel>
                  <Input
                    id="Id"
                    type="number"
                    placeholder="Identity Number"
                    {...register("id", {
                      required: "This is required",
                      maxLength: { value: 9, message: "Max length is 9" },
                    })}
                  />
                  <PasswordField register={register} />
                  <Input
                    id="Email"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "This is required",
                    })}
                  />
                  <Input
                    id="Full Name"
                    type="string"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "This is required",
                    })}
                  />
                </FormControl>
                <Button
                  mt={4}
                  w={"full"}
                  colorScheme="green"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Create a User
                </Button>
                <Button
                  mt={4}
                  w={"full"}
                  colorScheme="green"
                  isLoading={isSubmitting}
                  onClick={() => navigate("/")}
                >
                  Log in with existing user
                </Button>
              </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
