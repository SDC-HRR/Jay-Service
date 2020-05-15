import styled from "styled-components";

export const LeftColumn = styled.div`
  color: #acb2b8;
  float: left;
  font-size: 14px;
  margin: 16px 0 0;
  padding: 0;
  width: 616px;
`;

export const RightColumn = styled.div`
  float: right;
  margin: 16px 0 0 14px;
  overflow: hidden;
  padding: 0;
  width: 308px;
`;

export const Heading2 = styled.h2`
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png);
  background-position: left bottom;
  background-repeat: no-repeat no-repeat;
  color: #fff;
  font-family: "Motiva Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 26px;
  margin: 0 0 10px;
  padding: 2px 0 0;
  text-transform: uppercase;
`;

export const MainBodyText = styled.p`
  font-family: "Motiva Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  margin: 30px 0 10px 0;
  overflow: hidden;
  padding: 0;
`;

export const MainBodyImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
`;

export const DottedLine = styled.hr`
  border: 1px dotted white;
  margin: 15px 0;
`;

export const ShowWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentDesc = styled.div`
  margin-bottom: 12px;
`;

export const Paragraph = styled.p`
  margin: 0 0 8px;
  padding: 0;
`;

export const Italics = styled.i`
  font-style: italic;
  padding: 3px;
`;

export const SystemSpec = styled.div`
  color: #61686d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0 4px 4px 0;
  padding: 1px;
  text-transform: none;
`;

export const SystemMin = styled.span`
  color: #bcc6cd;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  margin: 0 4px 0 0;
  padding: 0;
  text-transform: uppercase;
`;

export const Strong = styled.strong`
  font-weight: 800;
`;

export const SideBarItem = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  margin: 0 0 8px;
  padding: 16px;
  min-height: 90px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const SideBarItemCustom = styled(SideBarItem)`
  display: flex;
  align-items: center;
`;

export const MetaCricticText = styled.span`
  color: #fff;
  float: left;
  font-family: "Motiva Sans", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 26px;
  margin-right: 6px;
  padding: 0;
`;

export const MetaCriticScore = styled.span`
  font-size: 36px;
  line-height: 36px;
  color: #fff;
  padding: 10px 10px 10px 10px;
`;

export const MetaCriticLogo = styled.img`
  width: 25px;
  height: 25px;
`;

export const SideBarItemElement = styled.div`
  background-color: rgba(103, 193, 245, 0.1);
  border-radius: 1px;
  color: #67c1f5;
  display: block;
  font-family: "Motiva Sans", sans-serif;
  font-weight: 300;
  line-height: 17px;
  margin: 0 0 2px;
  min-height: 17px;
  padding: 4px 0 4px 8px;
  text-decoration: none;
  &:hover {
    background-image: linear-gradient(135deg, #67c1f5 0%, #417a9b 100%);
    color: #fff;
  }
`;

export const SideBarImage = styled.img`
  width: 26px;
  height: 16px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  padding: 0px;
  border-radius: 2px;
  display: block;
  position: absolute;
`;

export const SideBarText = styled.span`
  padding: 0px 0px 0px 35px;
  font-weight: 150;
`;

export const AchievementImage = styled.img`
  float: left;
  height: 64px;
  margin: 0 4px 0 0;
  width: 64px;
`;

export const ViewAllAchievements = styled.div`
  align-items: center;
  background-color: rgba(103, 193, 245, 0.2);
  border-radius: 1px;
  color: #67c1f5;
  display: flex;
  flex-direction: row;
  float: left;
  font-family: "Motiva Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 64px;
  justify-content: center;
  line-height: 14px;
  margin: 0;
  padding: 0 4px;
  text-align: center;
  text-decoration: none;
  width: 64px;
  &:hover {
    background-image: linear-gradient(135deg, #67c1f5 0%, #417a9b 100%);
    color: #fff;
  }
`;

export const MiniDescriptionQuery = styled.span`
  color: #61686d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0 4px 4px 0;
  padding: 0;
  text-transform: none;
`;

export const MiniDescriptionValue = styled.span`
  color: #b0aeac;
  font-family: "Motiva Sans", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const MiniDescriptionUrl = styled(MiniDescriptionValue)`
  color: #67c1f5;
`;

export const LanguageColumnTitle = styled.th`
  color: #61686d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: 62px;
`;

export const LanguageEach = styled.td`
  color: #61686d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const LanguagesCheckMark = styled.td`
  color: #67c1f5;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const CarouselItem = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  color: #fff;
  margin: 0 2px 0 0;
  padding: 15px;
  position: relative;

  &:hover {
    border-color: rgba(103, 193, 245, 0.5);
    color: #66c0f4;
  }
`;

export const CarouselImgWrap = styled.div`
  max-width: 170px;
  width: 100%;
  height: 64px;
`;

export const CarouselNestedImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;