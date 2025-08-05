import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';

type InfoCardProps = {
    picturePath: string,
    role: string,
    name: string,
    email: string
}

export function InfoCard({picturePath, role, name, email}: InfoCardProps) {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src={picturePath}
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {role}
          </Text>

          <Text fz="lg" fw={500} >
            {name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16}  />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}