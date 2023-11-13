import React from 'react';
import {
  DiCss3,
  DiDocker,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiPython,
  DiReact,
  DiTrello,
  DiWordpress,
} from 'react-icons/di';
import {
  SiJquery,
  SiLeaflet,
  SiFastapi,
  SiExpress,
  SiCplusplus,
  SiMariadbfoundation,
  SiNotion,
} from 'react-icons/si';
import { BiLogoPhp, BiLogoFlask, BiLogoTypescript } from 'react-icons/bi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'DiCss3':
      return <DiCss3 />;
    case 'DiDocker':
      return <DiDocker />;
    case 'DiGithubBadge':
      return <DiGithubBadge />;
    case 'DiHtml5':
      return <DiHtml5 />;
    case 'DiJavascript1':
      return <DiJavascript1 />;
    case 'DiMongodb':
      return <DiMongodb />;
    case 'DiMysql':
      return <DiMysql />;
    case 'DiPython':
      return <DiPython />;
    case 'DiReact':
      return <DiReact />;
    case 'DiTrello':
      return <DiTrello />;
    case 'DiWordpress':
      return <DiWordpress />;
    case 'SiJquery':
      return <SiJquery />;
    case 'SiLeaflet':
      return <SiLeaflet />;
    case 'SiFastapi':
      return <SiFastapi />;
    case 'SiExpress':
      return <SiExpress />;
    case 'SiCplusplus':
      return <SiCplusplus />;
    case 'SiMariadbfoundation':
      return <SiMariadbfoundation />;
    case 'SiNotion':
      return <SiNotion />;
    case 'BiLogoPhp':
      return <BiLogoPhp />;
    case 'BiLogoFlask':
      return <BiLogoFlask />;
    case 'BiLogoTypescript':
      return <BiLogoTypescript />;
    default:
      return null;
  }
};

export default renderIcon;
