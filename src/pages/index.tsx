import { useCallback, useEffect, useRef } from "react";
import { toBlobURL } from "@ffmpeg/util";
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default function HomePage() {
  const ffmpegRef = useRef(new FFmpeg());
  const load = useCallback(async () => {
    // 网络原因，使用本地文件，可以使用网络地址，效果相同
    const baseURL = `${__webpack_public_path__}ffmpeg-mt/esm`;
    // const baseURL = `https://fastly.jsdelivr.net/npm/@ffmpeg/core-mt@0.12.2/dist/esm`
    // const baseURL = `https://unpkg.com/npm/@ffmpeg/core-mt@0.12.2/dist/esm`
    const ffmpeg = ffmpegRef.current;
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    // 安全上下文
    console.log("isSecureContext", isSecureContext);
    // 跨源隔离
    console.log("crossOriginIsolated", crossOriginIsolated);
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
      ),
    });
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <h2>复现情况请查看控制台</h2>
    </div>
  );
}
