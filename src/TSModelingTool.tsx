import { Text, List, Title, Paper, Space, Tabs} from '@mantine/core';

export default function TSModelingTool() {
  return (
    <Paper withBorder p="md">
      <Title order={3}>Model-Based Engineering Solutions</Title>
      <Space h="md" />

      <Tabs defaultValue="typescript">
        <Tabs.List>
          <Tabs.Tab value="typescript">TS Modeling Tool</Tabs.Tab>
          <Tabs.Tab value="xtend"> M2M + M2T </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="typescript" pt="xs">
          <Text mt="md">
            Developed a modeling tool prototype that bridged the gap between 
            software development and systems modeling through innovative use of TypeScript's type system.
          </Text>
          
          <Title order={4} mt="lg">Key Technical Achievements:</Title>
          <List spacing="xs">
            <List.Item>
              <strong>TypeScript AST Transformation Pipeline:</strong> Built a system that leverages the TypeScript 
              Compiler API to analyze type definitions at runtime, extracting structural information to generate 
              validation schemas and UI components dynamically.
            </List.Item>
            
            <List.Item>
              <strong>Metamodel-Driven Architecture:</strong> Created a framework where TypeScript interfaces serve as 
              the metamodel definition, allowing domain experts to define modeling constructs using familiar 
              programming language syntax instead of specialized modeling languages.
            </List.Item>
            
            <List.Item>
              <strong>Dynamic Property Editors:</strong> Engineered a form generation system that automatically creates 
              appropriate editors based on property types, constraints, and relationships defined in the TypeScript interfaces.
            </List.Item>
            
            <List.Item>
              <strong>Interactive Diagramming:</strong> Implemented a drag-and-drop diagramming interface for creating 
              visual models with automatic validation against the defined metamodel.
            </List.Item>
          </List>
          
          <Title order={4} mt="lg">Technologies Used:</Title>
          <Text>
            React, TypeScript, TypeScript Compiler API, JSON Schema, VS Code Extension API, WebView technology
          </Text>
        </Tabs.Panel>

        <Tabs.Panel value="xtend" pt="xs">
          <Text mt="md">
            Implemented model transformation solutions for enterprise architecture models using Xtend, 
            enabling automatic code generation and model transformation capabilities from UML-like models.
          </Text>
          
          <Title order={4} mt="lg">Key Technical Achievements:</Title>
          <List spacing="xs">
            <List.Item>
              <strong>Model-to-Text Transformations:</strong> Developed transformation pipelines that converted 
              Sparx Enterprise Architect models (XMI format) into working Python code, enabling rapid implementation
              of modeled systems.
            </List.Item>
            
            <List.Item>
              <strong>Model-to-Model Transformations:</strong> Created utilities to transform between different model 
              representations, allowing conversion between different modeling paradigms and formats.
            </List.Item>
            
            <List.Item>
              <strong>Enterprise Tool Integration:</strong> Successfully integrated with Sparx Enterprise Architect 
              through the Yakindu EA Bridge by itemis, creating a seamless workflow from EA modeling to code generation.
            </List.Item>
            
            <List.Item>
              <strong>Functional Programming Approach:</strong> Utilized Xtend's functional programming features 
              to create concise, maintainable transformation code with template expressions for code generation.
            </List.Item>
          </List>
          
          <Title order={4} mt="lg">Technologies Used:</Title>
          <Text>
            Xtend, Sparx Enterprise Architect, Yakindu EA Bridge, XMI, UML, Python, Model-Driven Engineering
          </Text>
        </Tabs.Panel>
      </Tabs>

      <Paper withBorder p="sm" mt="xl">
        <Text size="sm">
          Both projects demonstrate experience in model-driven engineering approaches, from custom-built 
          modeling environments to integration with enterprise architecture tools. These solutions enabled 
          engineers to work at a higher level of abstraction while maintaining precise control over implementation details.
        </Text>
      </Paper>
    </Paper>
  );
}
