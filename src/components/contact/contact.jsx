import React from 'react'
import { Box, Input, Button, Stack, FormControl, FormLabel, useBreakpointValue, Heading } from "@chakra-ui/react"


function Contact() {
  return (
    <Box _hover={{ boxShadow: "2xl" , transform: "scale(1.1)" , transition: "all 0.5s ease" , cursor: "pointer"}} borderRadius={{ base: "none", md: "xl" }} mb={{ base: 16, md: 24 }} mt={{ base: 16, md: 24 }} className='contact' boxShadow={{ base: "none", md: "xl"}} mx="auto" w={ { base: "90%", md: "40%"}} p={useBreakpointValue({ base: 4, md: 8 })}>
      <Box mb={4} mx="auto" textAlign="center">
        <Heading>Get in touch</Heading>
      </Box>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button colorScheme="blue" type="submit">Submit</Button>
      </Stack>
    </Box>
  )
}

export default Contact