import React from 'react';

import './transform.scss';
import CodeEditor from '../code-editor/CodeEditor';
import { useStore } from "effector-react";
import { store } from '../../store';
import { changeInput } from "../../events";

const Transform = () => {
  const { inputCss, outputCss } = useStore(store);
  return (
    <table>
      <tbody>
        <tr>
          <td style={{width: '50%'}}>
            <CodeEditor
                placeholder={ inputCss }
                initialValue={ '' }
                valueChanged={ changeInput }
                readOnly={false}
                type={ 'input' }
            />
          </td>
          <td style={{width: '50%'}}>
            <CodeEditor
                type={ 'output' }
                initialValue={ JSON.stringify(outputCss, null, 2) }
                readOnly={true}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transform;
