import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select
} from "@chakra-ui/react"

const LoginForm = () => {


  return (
    <form>
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
    </form>
  )
}

export default LoginForm
