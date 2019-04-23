import * as React from "react";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode);

export const Uploader = props => {
  return (
    <FilePond
      files={props.files}
      allowMultiple={true}
      maxFiles={5}
      server={`/screenshots/${props.identifier}/${props.filename}`}
      instantUpload={false}
      ref={props.currentRef}
      oninit={props.handleInit}
      onupdatefiles={props.handleFiles}
    />
  );
};

Uploader.defaultProps = {
  handleInit: () => { }
}
