'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import {trackTiming} from '../../nuclide-analytics';

export default class CodeFormatHelpers {

  @trackTiming('json.formatCode')
  static async formatEntireFile(editor: atom$TextEditor, range: atom$Range): Promise<{
    newCursor?: number,
    formatted: string,
  }> {
    const buffer_as_json = JSON.parse(editor.getBuffer().getText());
    const formatted = JSON.stringify(buffer_as_json, null, editor.getTabLength());
    return {formatted};
  }

}
