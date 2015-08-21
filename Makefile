NAMESPACE := vpommier
REPO := $(notdir $(CURDIR))
VERSION ?= latest

.PHONY: build

build:
	@docker build -t $(NAMESPACE)/$(REPO):$(VERSION) .
