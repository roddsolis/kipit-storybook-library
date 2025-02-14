import { ButtonComponent } from "./button.component";
import { Meta, StoryObj } from "@storybook/angular";

const meta: Meta< ButtonComponent> = {
    title:"Buttons",
    component: ButtonComponent,
    argTypes: {
        ButtonSize: {
            control:{type: "radio"},
            options: ["small", "medium", "large"],
    },
}};

export default meta; 
type Story = StoryObj< ButtonComponent>;

export const Primary: Story = {

    args: {buttonText: "Button Primary"},
};

export const Secondary: Story = {
    
    args: {buttonText: "Button secondary"},
};
export const tertiary: Story = {

    args: {buttonText: "Button tertiary"},
};