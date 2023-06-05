"use client"
import WhisperList from "@/components/molecules/WhisperList/WhisperList";
import WhisperHightlight from "@/components/atoms/WhisperHightlight/WhisperHightlight";
import WhisperInput from "@/components/atoms/Whisperinput/WhisperInput";
import Divider from "@/components/atoms/Divider/Divider";
import Title from "@/components/atoms/Title/Title";


export default function Home() {

  const whispers = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vulputate ante, sit amet congue velit. Nullam at nulla et metus ultrices elementum vitae tristique risus.',
      date: '23 janvier 2021'
    },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vulputate ante, sit amet congue velit. Nullam at nulla et metus ultrices elementum vitae tristique risus.',
      date: '23 janvier 2021'
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vulputate ante, sit amet congue velit. Nullam at nulla et metus ultrices elementum vitae tristique risus.',
      date: '23 janvier 2021'
    }
  ]

  return (
    <div>
      <Title title="What's on your mind today ?" />
      <WhisperInput placeholder={'Write your thoughts'}></WhisperInput>
      <Divider />
      <WhisperList whispers={whispers} />
      <WhisperHightlight />
    </div>
  )
}
