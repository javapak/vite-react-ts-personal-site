import {Title} from '@mantine/core'
import ContentAccordion from './ContentAccordion';
import './index.css'
export default function Home() {
    return (
        <div className='HomeDiv'>
        <Title className="puff-in-tl" style={{padding: 50}} order={1}>Alex Pakis</Title>
        <ContentAccordion />
        </div>
    );
}