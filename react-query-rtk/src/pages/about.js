import React from 'react';
import { useQueryClient} from "react-query";

function About() {
  const queryClient = useQueryClient();

  console.log(queryClient.getQueryData('giftcards'))

  return (
    <div>about</div>
  )
}

export default About;