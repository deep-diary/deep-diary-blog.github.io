(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{716:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("​\t本文主要介绍Whisper的基本使用，实现语音的输入输出")]),s._v(" "),a("p",[a("a",{attrs:{href:"www.deep-diary.com"}},[s._v("点击免费观看教学视频")])])]),s._v(" "),a("h1",{attrs:{id:"whisper"}},[s._v("Whisper")]),s._v(" "),a("h2",{attrs:{id:"安装环境"}},[s._v("安装环境")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/99880204?from_voters_page=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 安装 CUDA/cuDNN - 知乎 (zhihu.com)"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"安装cuda"}},[s._v("安装cuda")]),s._v(" "),a("p",[a("strong",[s._v("下载 CUDA")])]),s._v(" "),a("p",[s._v("去 NVIDIA 下载 CUDA，下载地址为："),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developer.nvidia.com/cuda-downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.nvidia.com/cuda-downloads"),a("OutboundLink")],1),s._v("。本次使用的是 Windows10 64位，因此此处选择 Windows10 64位版本，为了安装方便选择 local 版本。默认的下载是最新版本的 CUDA")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230526075710709.png",alt:"image-20230526075710709"}})]),s._v(" "),a("p",[s._v("若要下载其他版本的 CUDA，可以点击下面的 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"}},[s._v("Legacy Releases"),a("OutboundLink")],1),s._v("，下载自己需要的 CUDA：")]),s._v(" "),a("p",[s._v("11.8")]),s._v(" "),a("h3",{attrs:{id:"安装cudnn"}},[s._v("安装cuDNN")]),s._v(" "),a("p",[s._v("下载 cuDNN，下载之前需要先注册一下 Nvidia 的账号，下载地址为：[cudnn]("),a("a",{attrs:{href:"https://developer.nvidia.com/rdp/cudnn-download",target:"_blank",rel:"noopener noreferrer"}},[s._v("cuDNN Download | NVIDIA Developer"),a("OutboundLink")],1),s._v(") , 根据上面的对应关系，此处下载8.9.1版本：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230526220612064.png",alt:"image-20230526220612064"}})]),s._v(" "),a("p",[s._v("下载完成之后将其解压，解压之后的目录如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/v2-e731184dd7b81e8d202156d00dd93de0_1440w.webp",alt:"img"}})]),s._v(" "),a("p",[s._v("需要将以上三个文件复制到CUDA的安装目录中，通过上面的安装，我们将CUDA安装到了 "),a("code",[s._v("C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v10.2")]),s._v("目录中：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/v2-c19b1beb2a98d8359e65b2c704d76351_1440w.webp",alt:"img"}})]),s._v(" "),a("p",[s._v("那么我们需要将：")]),s._v(" "),a("ul",[a("li",[s._v("cuDNN中"),a("code",[s._v("bin")]),s._v("目录下的文件移动到 CUDA 的 "),a("code",[s._v("bin")]),s._v(" 目录中")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/v2-a28e9a813ef01a8374743f7de7a83d2a_1440w.webp",alt:"img"}})]),s._v(" "),a("ul",[a("li",[s._v("cuDNN目录中的 "),a("code",[s._v("include")]),s._v(" 中的文件移动到 CUDA 的 "),a("code",[s._v("include")]),s._v(" 目录中")]),s._v(" "),a("li",[s._v("cuDNN目录中的 "),a("code",[s._v("lib")]),s._v(" 中的文件移动到 CUDA 的 "),a("code",[s._v("lib")]),s._v(" 目录中")])]),s._v(" "),a("p",[s._v("这样就完成了cuDNN的安装。")]),s._v(" "),a("h4",{attrs:{id:"验证安装"}},[s._v("验证安装")]),s._v(" "),a("p",[s._v("通过NVIDIA提供的 "),a("code",[s._v("deviceQuery.exe")]),s._v(" 和 "),a("code",[s._v("bandwidthTest.exe")]),s._v(" 来查看GPU的状态，两者均在安装目录的 "),a("code",[s._v("extras\\demo_suite")]),s._v("文件夹中")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/v2-9e325623d4303bef4242e03f5191109f_1440w.webp",alt:"img"}})]),s._v(" "),a("p",[s._v("打开命令窗口，可以用"),a("code",[s._v("cmd")]),s._v(", 或者"),a("code",[s._v("git bash")]),s._v(" , 首先运行 "),a("code",[s._v("deviceQuery.exe")]),s._v(" ，可以看到如下结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230526221921088.png",alt:"image-20230526221921088"}})]),s._v(" "),a("p",[s._v("运行 "),a("code",[s._v("bandwidthTest.exe")]),s._v(" 看到如下结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230526222151417.png",alt:"image-20230526222151417"}})]),s._v(" "),a("h3",{attrs:{id:"安装torch"}},[s._v("安装torch")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pytorch.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PyTorch"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230526222601527.png",alt:"image-20230526222601527"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("==需要注意的是：cudnn, torch 的版本，都需要保持跟cuda版本一致，这里都是11.8==")]),s._v(" "),a("h3",{attrs:{id:"验证gpu效果"}},[s._v("验证GPU效果")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" torch\n\ndevice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cuda"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cuda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Using {} device"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("结果输出 "),a("code",[s._v("Using cpu device")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("torch                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\ntorchaudio                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("cu118\ntorchvision               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由于安装了"),a("code",[s._v("sentence_transformers")]),s._v(", torch 等版本被自动安装了，结果GPU效果失效")]),s._v(" "),a("p",[s._v("因此，考虑把原来的torch 卸载掉重装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip uninstall torch torchvision torchaudio\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再次执行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("BlueDoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DiaryWin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("python.exe D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("BlueDoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DiaryWin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("clip.py \nUsing cuda device\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("大功告成")]),s._v(" "),a("h3",{attrs:{id:"ffmpeg设置"}},[s._v("ffmpeg设置")]),s._v(" "),a("p",[s._v("下载ffmpeg并添加环境变量\n首先我们下载ffmpeg.exe。")]),s._v(" "),a("p",[s._v("下载地址是")]),s._v(" "),a("p",[s._v("https://github.com/BtbN/FFmpeg-Builds/releases")]),s._v(" "),a("p",[s._v("找到“ffmpeg-master-latest-win64-gpl.zip”版本下载。")]),s._v(" "),a("p",[s._v('解压后，找到bin文件夹下的“ffmpeg.exe”，将它复制到一个文件夹中，假设这个文件夹的路径是"D:\\software\\ffmpeg"，如下图')]),s._v(" "),a("p",[s._v('然后将"D:/software/ffmpeg"添加到系统环境变量。')]),s._v(" "),a("p",[s._v("添加方法：")]),s._v(" "),a("p",[s._v("键盘win+r，调出运行窗口")]),s._v(" "),a("p",[s._v("输入Sysdm.cpl后，点击确定。弹出系统属性窗口，先后点击高级、环境变量。")]),s._v(" "),a("p",[s._v("弹出新窗口后，双击Path")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230527101032509.png",alt:"image-20230527101032509"}})]),s._v(" "),a("p",[s._v("在空白行添加刚刚ffmpeg.exe所在的路径，点击确定。")]),s._v(" "),a("p",[s._v("==设置好环境变量后，有时候需要==")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ffmpeg -version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在命令窗口处，执行上述命令，正常会输出如下内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230527124407542.png",alt:"image-20230527124407542"}})]),s._v(" "),a("h3",{attrs:{id:"whisper的安装"}},[s._v("whisper的安装")]),s._v(" "),a("p",[s._v("以上步骤都完成后。按照官方文档，先运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" git+https://github.com/openai/whisper.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后再运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("完成whisper的安装。 作者：1590856 https://www.bilibili.com/read/cv20881630 出处：bilibili")]),s._v(" "),a("h2",{attrs:{id:"whisper的简单使用"}},[s._v("whisper的简单使用")]),s._v(" "),a("p",[s._v("简单使用")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" whisper\n\naudio_pth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'd:\\BlueDoc\\DiaryWin\\source\\audio\\love.mp3'")]),s._v("\n\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load_model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"medium"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tiny, base, small, medium")]),s._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transcribe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("audio_pth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("==medium 模型需要很大的内存==")]),s._v(" "),a("p",[s._v("其它使用方法")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" whisper\n\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load_model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load audio and pad/trim it to fit 30 seconds")]),s._v("\naudio "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load_audio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"audio.mp3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\naudio "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pad_or_trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("audio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make log-Mel spectrogram and move to the same device as the model")]),s._v("\nmel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log_mel_spectrogram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("audio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# detect the spoken language")]),s._v("\n_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" probs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("detect_language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"Detected language: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("probs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("probs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# decode the audio")]),s._v("\noptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DecodingOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whisper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print the recognized text")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);