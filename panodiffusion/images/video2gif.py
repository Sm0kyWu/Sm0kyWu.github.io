# convert a video to gif

import os
import sys
import argparse
from moviepy.editor import VideoFileClip

# read video file
video_path = "D:\personal_documents\gitio\ipoldm\images\\teaser.mp4"

# output gif file
gif_path = "D:\personal_documents\gitio\ipoldm\images\\teaser.gif"

def convert_mp4_to_gif(input_file, output_file, fps=10):
    clip = VideoFileClip(input_file)
    # You can adjust the parameter 'fps' for frames per second
    clip.write_gif(output_file, fps=fps)

# 使用方法：
convert_mp4_to_gif(video_path, gif_path)
