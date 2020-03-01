import React, { useContext } from 'react';

import './transform.scss';
import CodeEditor from '../code-editor/CodeEditor';

import { Context } from "../../App";

const Transform = () => {

  const { inputCss, outputCss, inputCssChanged } = useContext(Context);

  return (
    <table>
      <tbody>
        <tr>
          <td style={{width: '50%'}}>
            <CodeEditor
                placeholder={ inputCss }
                initialValue={ '' }
                valueChanged={ inputCssChanged }
                readOnly={ false }
                type={ 'input' }
            />
          </td>
          <td style={{width: '50%'}}>
            <CodeEditor
                type={ 'output' }
                initialValue={ outputCss }
                readOnly={ true }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transform;
