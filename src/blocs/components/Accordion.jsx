import { Accordion } from "@base-ui-components/react/accordion";

export default function MyAccordion() {
	return (
		<Accordion.Root>
			<Accordion.Item>
				<Accordion.Header>
					<Accordion.Trigger>What is Base UI?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					Base UI is a library of high-quality unstyled React components for design systems and web apps.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item>
				<Accordion.Header>
					<Accordion.Trigger>What is Base UI?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					Base UI is a library of high-quality unstyled React components for design systems and web apps.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item>
				<Accordion.Header>
					<Accordion.Trigger>What is Base UI?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					Base UI is a library of high-quality unstyled React components for design systems and web apps.
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion.Root>
	);
}
