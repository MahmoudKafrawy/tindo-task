## Tindo-task (Tabs)

This is task for tindo

## About

Tech used :

- Nextjs 14 with app router
- Tawilwind css
- Clsx library
- TailwindMerge library

## How to use

First import Tabs in your page

```bash
import { Tabs } from "@/components/ui/tabs";
```

example :

```bash
    <Tabs defaultValue="A">
        <Tabs.TabsPanel >
        <Tabs.Trigger value="A">Tab A</Tabs.Trigger>
        <Tabs.Trigger value="B"> Tab B</Tabs.Trigger>
        </Tabs.TabsPanel>
        <Tabs.TabsContent value="A">Content for A</Tabs.TabsContent>
        <Tabs.TabsContent value="B">Content for B</Tabs.TabsContent>
    </Tabs>
```

## Tab Props

| Prop           | Description                    | Type     | Default |
| -------------- | ------------------------------ | -------- | ------- |
| `defaultValue` | default value for selected tab | `string` |         |
| `className`    | override default className     | `string` |         |

## Tabs.Trigger Props

| Prop           | Description                | Type     | Default |
| -------------- | -------------------------- | -------- | ------- |
| `value       ` | Value for selected tab     | `string` |         |
| `className`    | override default className | `string` |         |
