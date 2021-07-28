import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select
} from "@chakra-ui/react"
const VPostForm = () => {
  return (
    <form>
      <p> Add Your Resource </p>
      <FormControl id="email" isRequired >
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>

      <FormControl as="fieldset" isRequired >
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">User</Radio>
            <Radio value="Nagato">Volenteer</Radio>
            <Radio value="Itachi">Organisations</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>

      <FormControl id="address" isRequired>
        <FormLabel>Address</FormLabel>
        <Input placeholder="Address" />
      </FormControl>

      <FormControl id="city" isRequired >
        <FormLabel>City</FormLabel>
        <Select placeholder="Select City">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>


      <FormControl id="state" isRequired >
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select State">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <Button type="submit" style={{ marginTop: "2rem" }} colorScheme="blue">Submit</Button>
    </form>
  )
}

export default VPostForm;
