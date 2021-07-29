import ButtonProps from "../../../components/atoms/Button/types/ButtonProps";
import TitleProps from "../../../components/atoms/Title/types/TitleProps";
import ParagraphProps from "../../../components/atoms/Paragraph/types/ParagraphProps";

//TODO: Agregar para icono y imagen !
export default interface LandingProps {
  title: TitleProps;
  button: ButtonProps;
  paragraph: ParagraphProps;
  styles: any;
}
