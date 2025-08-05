import { Accordion, Avatar, Paper, Stack, Badge, Button, Group, Text, Box, Blockquote} from '@mantine/core';
import { ReactNode } from 'react';
import TSModelingTool from './TSModelingTool';
import GithubProjectCards from './GithubProjectCards';
import { IconBrandLinkedin, IconMail, IconFileCv, IconBrandGithub } from '@tabler/icons-react';
import { InfoCard } from './InfoCard';
import { useDisclosure } from '@mantine/hooks';


export default function ContentAccordion() {
const [opened, { toggle }] = useDisclosure();

const accordionContent =[
  {
    value: 'About', 
    headerImage: <InfoCard picturePath='profile.jpg' email='alexpakis2@gmail.com' name='James Alexander Pakis' role='Software Engineer' />,
    content: "I graduated with a Bachelor of Science degree in Computer Science from University of Memphis in August 2022, where I learned the fundamentals of object-oriented programming, data structures, algorithms, and software engineering. I started working at Technergetics on October 17, 2022, and continued working there up until the end of October 2024. My time there consisted of developing prototype tooling for model based software/system engineering that could be utilized within the VS Code IDE environment. I utilized mostly Typescript, but also spent a large chunk of my time with a JVM language called Xtend. I enjoy both web development with Javascript/Typescript as well as Java and anything derivative or similar to it where object oriented design can be taken advantage of."
  },
  {
    value: 'Experience', 
    component: (<TSModelingTool />)
  },
  { 
    value: 'Projects', 
    component: (<GithubProjectCards username="javapak"/>)
  }, 
  {
    value: 'Skills',
    content: "",
    component: (
      <Box>
        <Text size="lg" mb="md">Technical Skills</Text>
        

        <Text fw={500} mb="xs">Programming Languages</Text>
        <Group gap="xs" mb="md">
          <Badge size="lg" className="badge badge-blue-light">TypeScript</Badge>
          <Badge size="lg" className="badge badge-blue-light">JavaScript</Badge>
          <Badge size="lg" className="badge badge-blue-light">Java</Badge>
          <Badge size="lg" className="badge badge-blue-light">Xtend</Badge>
          <Badge size="lg" className="badge badge-blue-light">Python</Badge>
          <Badge size="lg" className="badge badge-blue-light">C#</Badge>

          <Badge size="lg" className="badge badge-blue-light">HTML/CSS</Badge>

        </Group>
        

        <Text fw={500} mb="xs">Frameworks & Libraries</Text>
        <Group gap="xs" mb="md">
          <Badge size="lg" className="badge badge-blue-medium">React</Badge>
          <Badge size="lg" className="badge badge-blue-medium">Node.js</Badge>
          <Badge size="lg" className="badge badge-blue-medium">Mantine UI</Badge>
          <Badge size="lg" className="badge badge-blue-medium">VS Code Extension API</Badge>
          <Badge size="lg" className="badge badge-blue-medium">Xtext</Badge>
        </Group>
        

        <Text fw={500} mb="xs">Tools & Technologies</Text>
        <Group gap="xs" mb="md">
          <Badge size="lg" className="badge badge-blue-dark">Git</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Eclipse</Badge>
          <Badge size="lg" className="badge badge-blue-dark">VS Code</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Model-Based Systems Engineering</Badge>
          <Badge size="lg" className="badge badge-blue-dark">RESTful APIs</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Agile Development</Badge>
        </Group>
      </Box>
    )
  },
  {
    value: 'Education',
    content: "Bachelor of Science in Computer Science, University of Memphis (Graduated: August 2022)",
    component: (
      <Box mt="md">
        <Text size="lg" fw={500}>Relevant Coursework:</Text>
        <Group gap="xs" mt="xs">
          <Badge size="lg" className="badge badge-blue-dark">Capstone Software Project (COMP 4882)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Computer Organization/Architecture (COMP 3410)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Database Process and Design (COMP 3115)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Design/Analysis of Algorithms (COMP 4030)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Digital Forensics (COMP 4430)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Discrete Structures (COMP 2700)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Ethics and Technology (COMP 1950)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Intro to Artificial Intelligence (COMP 4720)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Intro to Programming (Java, 2018) (COMP 1900)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Models of Computation (COMP 4601)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">OOP and Data Structures (COMP 2150)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Operating Systems (COMP 4270)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Programming Languages (COMP 4040)</Badge>
          <Badge size="lg" className="badge badge-blue-dark">Software Engineering (COMP 4081)</Badge>
        </Group>
      </Box>
    )
  },
  {    value: 'Contact',
    component: (
      <Group justify="center" gap="xl" mt="md">
        <Button 
          leftSection={<IconBrandLinkedin size={20} />} 
          component="a" 
          href="https://www.linkedin.com/in/jamespakis/" 
          target="_blank"
          variant="light"
        >
          LinkedIn
        </Button>
        <Button 
          leftSection={<IconBrandGithub size={20} />} 
          component="a" 
          href="https://github.com/javapak" 
          target="_blank"
          variant="light"
        >
          GitHub
        </Button>
        <Button 
          leftSection={<IconMail size={20} />} 
          component="a" 
          href="mailto:alexpakis2@gmail.com"
          variant="light"
        >
          Email
        </Button>
        <Button 
          leftSection={<IconFileCv size={20} />} 
          component="a" 
          href="/Resume25.pdf" 
          download
          variant="light"
        >
          Download Resume
        </Button>
      </Group>
    )
  }
];

  const items = accordionContent.map((item: {value: string, component?: ReactNode, content?: string, headerImage?: ReactNode }) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel className='AccordionPanel'>    
        {item.headerImage && (<div className='HeaderImage' children={item.headerImage} />)}
        {item.content && (<Blockquote p="md">{item.content}</Blockquote>)}
        {item.component && (<div children={item.component} />)}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className='AccordionParent'>
      <Accordion defaultValue="About">
        {items}
      </Accordion>
    </div>
  );
}

