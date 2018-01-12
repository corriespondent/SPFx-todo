import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


import * as strings from 'CorrieToDoWebPartStrings';
import CorrieToDo from './components/CorrieToDo';
import { ICorrieToDoProps } from './components/ICorrieToDoProps';

export interface ICorrieToDoWebPartProps {
  description: string;
}

export default class CorrieToDoWebPart extends BaseClientSideWebPart<ICorrieToDoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICorrieToDoProps > = React.createElement(
      CorrieToDo,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
