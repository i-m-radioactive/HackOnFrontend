import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    RadioGroup,
    Button,
    HStack,
    Radio,
    Select
} from "@chakra-ui/react";
import { useQuery } from '@apollo/client';
const ManageProfile = () => {



    return (
        <form>
            <p> Update Your Profile </p>
            <FormControl id="email" isRequired >
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="name" isRequired>
                <FormLabel>Name:</FormLabel>
                <Input placeholder="Name" />
            </FormControl>

            <FormControl as="fieldset" isRequired >
                <FormLabel as="legend">Role</FormLabel>
                <RadioGroup defaultValue="----">
                    <HStack spacing="24px">
                        <Radio value="USER">User</Radio>
                        <Radio value="VLT">Volenteer</Radio>
                        <Radio value="ORG">Organisations</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
            </FormControl>

            <FormControl id="pincode" isRequired>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Pincode" />
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


            <Button type="submit" style={{ marginTop: "2rem", marginBottom: "2rem" }} colorScheme="blue">Submit</Button>
        </form>
    )
}

export default ManageProfile
