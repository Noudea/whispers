import Whisper from "@/components/atoms/whisper/Whisper";
import styles from './page.module.css'
import WhisperList from "@/components/molecules/WhisperList/WhisperList";
import WhisperHightlight from "@/components/atoms/whisperHightlight/WhisperHightlight";

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
    <>
      <WhisperList whispers={whispers} />
      <WhisperHightlight />
    </>
  )
}
