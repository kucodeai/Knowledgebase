# OpenCV 安装教程  

:::tip 最近更新  
欢迎访问OpenCV 安装课程 ！本课程旨在提供给您OpenCV 在多个主流平台的安装指南, 运行环境仅限于本地安装. 我们会覆盖Windows、Ubuntu和macOS等, 并且也会提供如何通过Docker镜像的模式安装OpenCV. 如果您有任何问题，请到本课程交流社区进行提问. 我们会非常高兴回答你们的问题.
友情提醒：在正式提问前，建议您利用Google搜索或其他辅助手段获取答案, 如: Stackoverflow等.  
学习愉快!
:::

## 概述   

### 安装程序介绍  
敬请期待...  

## Windows

**概览**  
本指南将帮助您使用 Anaconda 安装 OpenCV for Python。  

**Step 1: 安装Anaconda的Python 3版**  
下载并安装Anaconda Python 3版本，网址为https://www.anaconda.com/distribution/   

![Anaconda下载安装程序](https://cdn.img.kucodeai.com/knowledgebase/anaconda-python-3.png)

  

在安装Anaconda时，请确保检查这两个选项：  

* 添加 Anaconda 到系统的环境变量中,方法：Windows 10->Win+Q->输入"env"  
* 注册 Anaconda 作为默认的Python工具   

**Step 2: 创建虚拟环境**  
我们将使用虚拟环境来安装Python库。一般来说，将你的项目环境和全局环境分开是一个很好的做法。  
打开命令提示符或Power shell，执行以下命令。你可以使用其他任何名称来代替opencv-course  

    conda create --name opencv-course python=3.6  

按回车键，环境将被安装  

**Step 4: 安装OpenCV**  
激活我们刚才创建的环境（opencv-course），使用下面的命令安装所有需要的库。  

    activate opencv-course  
    pip install cmake  
    pip install numpy scipy matplotlib scikit-learn jupyter ipython  
    pip install opencv-contrib-python==4.1.0.25  
    conda install -c conda-forge dlib  

**Step 4: 检查安装**  
接下来，我们将检查安装是否成功。在命令提示符中执行以下命令。  

    # activate environment

activate opencv-course

    # open ipython (run this command on terminal)  
    ipython  
    # import cv2 and print version (run following commands in ipython)  
    import cv2  
    print(cv2.__version__)  
    # If OpenCV3 is installed correctly, the above command should give output 4.1.0.  
    # Press CTRL+D to exit ipython  

现在, 你可以从Python的虚拟环境中退出来了.  

    deactivate

## macOS  

敬请期待...

## Ubuntu 18/16  

**概览**  
本指南将会帮助您使用pip包管理器安装OpenCV的Python版本.  

**Step 1: 安装Python类库**  

    sudo apt -y update  
    sudo apt -y upgrade  
    sudo apt-get install python3-dev python3-pip python3-venv  
    sudo -H pip3 install -U pip numpy  
    sudo apt-get install libx11-dev libgtk-3-dev libboost-python-dev  
    sudo apt-get install python3-testresources  
    sudo apt-get install build-essential checkinstall cmake pkg-config yasm    

我们将使用虚拟环境来安装Python库。一般来说，将项目环境和全局环境分开是一个很好的做法。  

    cwd=$(pwd)  
    # create virtual environment  
    python3 -m venv opencv-course  

    echo "# Alias for activating the environment" >> ~/.bashrc  
    echo "alias workoncvcourse=\"source $cwd/opencv-course/bin/activate\"" >> ~/.bashrc  
    source ~/.bashrc  
    source "$cwd"/opencv-course/bin/activate  

    # now install python libraries within this virtual environment  
    pip3 install --upgrade pip  
    pip install wheel numpy scipy matplotlib scikit-image scikit-learn ipython dlib  

    # quit virtual environment  
    deactivate  

**Step 2: 安装OpenCV**  
现在，我们已经创建了一个虚拟环境，并在上一步的bashrc文件中添加了别名。我们先用别名激活它，然后安装OpenCV模块.  

    
    workoncvcourse  
    # Install OpenCV and Dlib modules  
    pip install opencv-contrib-python==4.1.0.25  

**Step 3: 检查安装**  
我们现在已经到了安装的最后一步了。接下来要做的就是验证安装是否成功。  
首先，激活环境。  

    workoncvcourse

接下来，打开IPython，检查OpenCV版本。  

    # open ipython (run this command on terminal)  
    ipython  
    # import cv2 and print version (run following commands in ipython)  
    import cv2  
    print(cv2.__version__)  
    # If OpenCV is installed correctly, the above command should give output 4.1.0  
    # Press CTRL+D to exit ipython  

现在你可以从Python虚拟环境中退出  

    deactivate

## 示例代码  

敬请期待...  
