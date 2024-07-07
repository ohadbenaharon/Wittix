import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { CustomerType } from "../types/customerType";

const ListOfCustomers = (customers: { customers: CustomerType[] }) => {
  return (
    <Box p={4}>
      <Heading mb={4} fontSize="xl">
        List of Customers
      </Heading>
      <Grid
        templateColumns="1fr 1fr 1fr 1fr"
        gap={0}
        borderWidth="1px"
        borderColor="black"
      >
        {/* Header Row */}
        <GridItem p={2} bg="gray.200" fontWeight="bold" textAlign="center">
          Name
        </GridItem>
        <GridItem p={2} bg="gray.200" fontWeight="bold" textAlign="center">
          Phone
        </GridItem>
        <GridItem p={2} bg="gray.200" fontWeight="bold" textAlign="center">
          Email
        </GridItem>
        <GridItem p={2} bg="gray.200" fontWeight="bold" textAlign="center">
          Birthday
        </GridItem>

        <GridItem
          p={2}
          borderBottomWidth="1px"
          borderColor="black"
          textAlign="center"
        >
          customer.name
        </GridItem>
        <GridItem
          p={2}
          borderBottomWidth="1px"
          borderColor="black"
          textAlign="center"
        >
          customer.phone
        </GridItem>
        <GridItem
          p={2}
          borderBottomWidth="1px"
          borderColor="black"
          textAlign="center"
        >
          customer.email
        </GridItem>
        <GridItem
          p={2}
          borderBottomWidth="1px"
          borderColor="black"
          textAlign="center"
        >
          customer.birthday
        </GridItem>

        {/* Customer Rows */}
        {customers.customers?.map((customer) => (
          <>
            <GridItem
              p={2}
              borderBottomWidth="1px"
              borderColor="black"
              textAlign="center"
            >
              {customer.name}
            </GridItem>
            <GridItem
              p={2}
              borderBottomWidth="1px"
              borderColor="black"
              textAlign="center"
            >
              {customer.phone}
            </GridItem>
            <GridItem
              p={2}
              borderBottomWidth="1px"
              borderColor="black"
              textAlign="center"
            >
              {customer.email}
            </GridItem>
            <GridItem
              p={2}
              borderBottomWidth="1px"
              borderColor="black"
              textAlign="center"
            >
              {/* {customer.birthday} */}
            </GridItem>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default ListOfCustomers;
